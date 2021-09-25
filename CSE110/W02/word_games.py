print('\nPlease enter the following: \n')

# Creates arrays for all variables needed:
adjective = []
verb = []
animal = []

adj1 = input('An adjective: ')
adjective.append(adj1)

ani1 = input('An animal: ')
animal.append(ani1)

v1 = input('A verb: ')
verb.append(v1)

exclamation = input('An exclamation: ')

v2 = input('Another verb: ')
verb.append(v2)

v3 = input('And one more verb: ')
verb.append(v3)

print('\nYour story is: \n')
print(f'The other day, I was really in trouble. It all started when I saw a '\
      f'very {adjective[0].lower()} {animal[0].lower()} {verb[0].lower()} down '\
      f'the hallway. "{exclamation.capitalize()}!" I yelled. But all I could'\
      f' think to do was to {verb[1].lower()} over and over.\nMiraculously, '\
      f'that caused it to stop, but not before it tried to {verb[2].lower()}'\
      f' right in front of my family.\n') 
print('"What happened next?" Enter the following: \n')

adj2 = input('Another adjective: ')
adjective.append(adj2)

ani2 = input('Another animal: ')
animal.append(ani2)

place = input('A country: ')

number = input('A random number: ')

v4 = input('A continuous verb (The -ing form): ')
verb.append(v4)

surname = input('A random surname: ')

teacher = input('The name of your teacher (Include "Mr." or "Mrs."): ')

first_letter = adjective[1].lower()[0]
article = 'a'
if(first_letter == ('a' or 'e' or 'i' or 'o' or 'u')):
    article = 'an'

print('\nContinuing: \n')
print(f'Well, it turns out that the {animal[0].lower()} was actually {article}'\
      f' {adjective[1].lower()} {animal[1].lower()} that my neighbour was '\
      f'taking care while her sister was traveling to {place.capitalize()} '\
      f'with her {number} children, and when I thought I had seen it '\
      f'{verb[2].lower()} in front of my family, it was actually just '\
      f'{verb[3].lower()}, which is kind of cute. After that, I started helping '\
      f'Ms. {surname.capitalize()} taking care of her sister`s pet and that`s '\
      f'why I did not finish my papers, {teacher.capitalize()}...\n ')

