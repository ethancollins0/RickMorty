MUAHAHAHAHAHHAA

alright

using the rickandmorty api:

url for all characters: 'https://rickandmortyapi.com/api/character'
url for characters by name: 'https://rickandmortyapi.com/api/character?name=' + SEARCHEDNAME

User should see a search form and a 'get all characters' button on page load

User should be able to click on the button to get all characters, or use the search form to get character(s) by name
shouldn't break if no characters are found

User should be able to see details about a character, including:
    - Image
    - Name
    - Gender
    - Species
    - Status
    - Name of Origin Planet

    Name of Origin Planet and Alive Status should conditionally render, only if the values aren't 'unknown'

User should be able to toggle alive status by clicking on it (if status is dead, change to alive, and vice versa)

User should be able to click on a character's picture and be taken to their url

MORE SPECIFIC TIPS BELOW IF NEEDED/WANTED









Make 3 components, a CharacterContainer.js, Character.js, and SearchForm.js file

App is the top level component (besides index)

SearchForm and CharacterContainer are children of App
Character is a child of CharacterContainer

the search form should be controlled

all fetches should be done in App
