person = {
    'name': 'Bryant M.',
    'age': '28',
    'hobbies': ['video games', 'chess', 'working out'],
    'wakeUpTimes': {
        'Monday': 6,
        'Tuesday': 8,
        'Wednesday': 10
    }
}

print("My name is " + person['name'])
print("I have " + str(len(person['hobbies'])) + " hobbies")
print("On Mondays I get up at " + str(person['wakeUpTimes']['Monday']))
print("On Tuesdays I get up at " + str(person['wakeUpTimes']['Tuesday']))
print("On Wednesday I get up at " + str(person['wakeUpTimes']['Wednesday']))
