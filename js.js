
class BlacklistedIndividual{
  constructor(inputText,blacklistedIndividualId){
    this.inputText= inputText
    this.blacklistedIndividualId = blacklistedIndividualId
  }
}


class TopMenu{
  constructor() {
  }

  renderTopMenu(){
    const addButton = document.createElement("BUTTON")
    addButton.innerHTML= "Dodaj do blacklisty"
    document.body.appendChild(addButton)

    const blacklistInput = document.createElement("INPUT")
    document.body.appendChild(blacklistInput)
  }

  render(){
    this.renderTopMenu()
  }

}

let topMenu1 = new TopMenu()
topMenu1.render()



//TODO zrobić dwie klasy, jedna to cała strona z metodami, druga do wrzucania pojedynczej iteracji blacklisty z textem i ID, pamiętaż, że || zwraca wartość jeżeli piersza jest falsy
