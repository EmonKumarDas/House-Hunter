function Palindrom(Text) {
    const removeString = Text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return removeString === removeString.split('').reverse().join('');
  }

  console.log(Palindrom("level")); 
  console.log(Palindrom("hello")); 
  console.log(Palindrom("A man, a plan, a canal: Panama")); 
  