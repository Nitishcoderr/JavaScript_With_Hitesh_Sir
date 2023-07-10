const myObject = {
    js : 'Javascript',
    cpp:'C++',
    rb : 'ruby',
    swift:'Swift by apple'
}

for (const key in myObject) {
    console.log(`${key} for shortcut is for ${myObject[key]}`);
}

const programming = ['js','rb','c','c++','java']

for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map()
map.set('In','India')
map.set('FRANCE','USA')
map.set('Aust','Japan')

for (const key in map) {
    console.log(key);
}

