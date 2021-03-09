
class BlacklistedIndividual{
  constructor(inputText,blacklistedIndividualId){
    this.inputText= inputText
    this.blacklistedIndividualId = blacklistedIndividualId
  }
}


class Blacklist{
  constructor() {
  }

  renderTopMenu(buttonText){
    const addButton = document.createElement("BUTTON")
    addButton.innerHTML= `${buttonText} `
    document.body.appendChild(addButton)

    const blacklistInput = document.createElement("INPUT")
    document.body.appendChild(blacklistInput)
  }
}


let blacklist1 = new Blacklist()
blacklist1.renderTopMenu("Add to blacklist")




//TODO zrobić dwie klasy, jedna to cała strona z metodami, druga do wrzucania pojedynczej iteracji blacklisty z textem i ID, pamiętaż, że || zwraca wartość jeżeli piersza jest falsy
