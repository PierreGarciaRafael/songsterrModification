import pyperclip as pc
import os
import sys
def copyFileForBookMklt(fileName):
    fd = open(fileName, mode = "r", )
    pc.copy("javascript: (() => {"+fd.read()+"})()")

#os.system("uglifyjs "+sys.argv[1]+" -o mini.js")
copyFileForBookMklt(sys.argv[1])
#os.system("rm mini.js")
