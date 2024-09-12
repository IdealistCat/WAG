const CREDITS = [
    {
        type: "group",
        name: "Web Adventure Game",
        content: [
            {
                type: "person",
                person: "IdealistCat",
                job: "Programming"
            }
        ]
    }
]

var creditsDiv = document.getElementsByClassName('credits');

function addPerson(personEl = {type:'', person:'', job:''}) {
    if (personEl.type == '' || personEl.type.length < 1) return null;
    
    var person = document.createElement('p');
    person.innerHTML = `${personEl.person} - ${personEl.job}`;
    return person;
}

CREDITS.forEach(index => {

    var element = CREDITS[index];

    if (element.type == "group") {

        var heading = document.createElement('h1');
        heading.innerHTML = element.name;
        creditsDiv.append(heading);
        
        element.content.forEach(personEl => {
            creditsDiv.append(addPerson(personEl));
        });
    }
    creditsDiv.append(addPerson(element));
});

creditsDiv.append(addPerson({
                type: "person",
                person: "IdealistCat",
                job: "Programming"
            }));