export const translateToPigLatin = (input) => {
		//if there are multiple words, split the words and 'pigify' each word
    if (input.match(/ /)) {
        var arr = input.toLowerCase().split(' ');
        var result = '';
        for (var i = 0; i < arr.length; i++) {
						//insert a space before the word, if it is not the first word
            if (i > 0) {
                result += ' ';
            }
            result += pigify(arr[i]);
        }
        return result
    }
    return pigify(input);

    function pigify(input) {
        var i = input.search(/[aeiou]/);
				//if the word starts with a vowel, add 'ay' to the end of it
        if (!i) {
            return input + 'ay';
        }
				//if the word has 'qu' at the beginning, the 'u' must be shifted to the end
				//along with the 'q' and any letters that precede 'q'
        if (input.match(/qu/)) {
            if (input.indexOf('qu') < i) { 
                i++;
            }
        }
				//return the 2nd syllable + the first syllable + 'ay'
        return input.substr(i) + input.substr(0, i) + 'ay';
    }
}

export const arrayPager = (data, page, offset) => {
		return data.slice(page == 1 ? 0 : (page * offset) - offset, page * offset)
}
