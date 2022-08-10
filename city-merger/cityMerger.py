from os.path import exists
from os import remove

if(exists('output.txt')):
    remove('output.txt')

us_fs = open('USCities.txt', 'r')
ca_fs = open('CACities.txt', 'r')
ws = open('output.txt', 'a')

usCity = 'empty'
caCity = 'empty'
usEOF = False
caEOF = False

while True:
    #leave loop if both are eof
    if(usEOF and caEOF):
        break

    if(usCity == 'empty' and not usEOF): #check empty and not eof
        usCity = us_fs.readline()

        print('read ' + usCity)
        if not usCity: usEOF = True
    if(caCity == 'empty' and not caEOF): #check empty and not eof
        caCity = ca_fs.readline()
        
        print('read ' + caCity)
        if not caCity: caEOF = True

    print('comparing: ' + usCity + caCity)
    if(usCity < caCity):
        ws.write(usCity)
        print('wrote ' + usCity)
        usCity = 'empty'
    else:
        ws.write(caCity)
        print('wrote ' + caCity)
        caCity = 'empty'

us_fs.close()
ca_fs.close()
ws.close()