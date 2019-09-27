/*
1. What functionality is this class trying to achieve?

The class Mystery looks like a tags/keywords handler.

2. Is there any redundant code? Suggest some improvements in the code of this class.
*/ 
class Mystery {
    //First we need to add a constructor to initialize every instance 
    //of Mistery with an empty array of keywords.

    constructor(){
        this.keywords = []
    }

    // The method "add" help us to aggregate only new words to keywords array.
    // Since "input" is not used anymore (useless code), we are going to replace some things as follow
    // The new input will be a string instead of an object.
    add(value) {

        // We do not have to deconstruct anymore. 
        // const { input, value } = event;

        // To check if the keyword is not already in keyword we have to trim "value" first
        let trimValue = value.trim()
        if (!this.keywordExists(trimValue) && trimValue !== "") {
            // If is not required to be an object we can use string instead
            this.keywords.push(trimValue);
        }
        /*
        This code is useless

        if (input) {
            input.value = '';
        }
        */
    }

    keywordExists(value) {
        let entryExists = false;
        for (const entry of this.keywords) {
            if (entry.value === value) {
                entryExists = true;
            }
        }
        return entryExists;
    }

    remove(target) {
        const index = this.keywords.indexOf(target);

        if (index >= 0) {
            this.keywords.splice(index, 1);
        }
    }

}
