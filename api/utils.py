import random
import string 
from Crypto.Cipher import AES
from base64 import b64encode, b64decode
import datetime 

SECRET_KEY = 'j)38%o0xk8w#85y2'
def generateHandshakeToken(userId, deviceId, appId, expirationTimestamp,type):
    """ Will concatinate series of information into a long string, encrypt it, then convert to base64 """
    sand = "".join([random.choice(string.ascii_letters + string.digits) for n in range(32)])
    unencrypted = "-".join([userId, deviceId, expirationTimestamp, datetime.datetime.now().strftime("%I:%M%p on %B %d, %Y"), type, sand])
    aes_obj = AES.new(SECRET_KEY, AES.MODE_CFB, "OsTKeLOpbygfYkg3")
    hx_enc = aes_obj.encrypt(unencrypted)
    mret = b64encode(hx_enc).decode('utf-8')
    return mret
def decryptToken(str):
    aes_obj = AES.new(SECRET_KEY, AES.MODE_CFB, "OsTKeLOpbygfYkg3")
    str_tmp = b64decode(str.encode("utf-8"))
    str_dec = aes_obj.decrypt(str_tmp)
    mret = str_dec.decode("utf-8")
    return mret 



