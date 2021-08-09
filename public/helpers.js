'strict-mode';

export function validatePassword(username, email, p, cp) {
  if (username.length < 1) return "Please enter your name";
  if (email.length < 3) return "Please enter your email";  
  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) return "Please enter a valid email";
  if (p.length < 8) return "Your password must be at least 8 characters"; 
  if (p.search(/[a-z]/i) < 0) return "Your password must contain at least one letter"; 
  if (p.search(/[0-9]/) < 0) return "Your password must contain at least one digit"; 
  if (p.search(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/) < 0) return "Your password must contain at least one special character"; 
  if (p !== cp) return "Your passwords do not match";
  return null;
}