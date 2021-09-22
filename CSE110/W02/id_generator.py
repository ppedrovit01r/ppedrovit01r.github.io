print('Welcome to BYU-I ID Badge Generator\nPlease enter the following information:\n')
first_name = input('First name: ')
last_name = input('Last name: ')
email = input('Email address: ')
phone = input('Phone number: ')
job = input('Job title: ')
id_number = input('ID Number: ')
print('\nWe are almost there! Just a couple more: ')
hair = input('Hair color: ')
eyes = input('Eye color: ')
month = input('Name of the month you have started working: ')
training = input('Have you completed advanced training? (Yes/No) ')

print('\nThank you! The ID Card is:')
print('----------------------------------------\n'
    +last_name.upper()+', '+first_name.capitalize()+'\n'
    +job.title()+'\n'
    +'ID: '+id_number+'\n'
    +'\n'
    +email.lower()+'\n'
    +phone+'\n'
    +'\n'
    +'Hair: {:18}'.format(hair.capitalize())+'Eyes: '+eyes.capitalize()+'\n'
    +'Month: {:17}'.format(month.capitalize())+'Training: '+training.capitalize()+'\n'
    +'----------------------------------------\n')
