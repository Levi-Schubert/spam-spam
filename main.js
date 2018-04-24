//From that object extract just the customers' email addresses and store them in a new array.
// You will need to use methods such as map(), forEach() and/or concat() to accomplish this.

let emails = [] 
customers.customers.forEach(customer => {
	let temp = customer.contacts.email.map(function (email){
		return email
	})
	temp.forEach(email => {
		emails.push(email)
	})
})

console.log(emails)