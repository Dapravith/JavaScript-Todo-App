 
let input = document.querySelector('#inputText') 
let todo = document.querySelector('#todos')  
let btn = document.querySelector('.checkbox-round')

input.focus();
// add new list item with check button
btn.addEventListener('click', function(){
	let list = document.createElement('li')
	if(document.getElementById('main').classList.contains('light-theme')){
		list.classList.add('li-color-light')
	} 
	if(document.getElementById('main').classList.contains('dark-theme')){
		list.classList.add('li-color-dark');
	}
	 
	let userInput = input.value;
	let text = document.createTextNode(input);
	list.appendChild(text);

	if(userInput===''){
		alert('Enter a to-do first')
	}else{
		todo.appendChild(list);
	}
	list.textContent = userInput;
	input.value = '';

	let checkBtn= document.createElement('button');
	checkBtn.classList.add('new-item', 'checkbox-round');
	
	if(document.getElementById('main').classList.contains('dark-theme')){
		checkBtn.style.backgroundColor = 'hsl(214, 22%, 23%)'
		checkBtn.style.border = '1px solid rgb(114, 112, 112)'

	}
	if(document.getElementById('main').classList.contains('light-theme')){
		checkBtn.style.backgroundColor = 'white'
		checkBtn.style.border = '1px solid #ddd'

	}
	list.appendChild(checkBtn);
		
	//click the check button
	checkBtn.addEventListener('click', function(){
		
		this.classList.toggle('checked');
		list.classList.toggle('todo-done');
	});

	// show active only

	let active = document.querySelector('#show-active');

	active.addEventListener('click', function(){
		if(list.classList.contains('todo-done') == true){
			list.style.display='none';
		}else{
			list.style.display='block';
		}
	});
	// show all

	let show_all = document.querySelector('#show-all');
	show_all.addEventListener('click', function(){
		if(list.textContent == ''){	
			list.style.display='none';
			
		}else{
			
			list.style.display='block';		
			}
		
	});

	 
	// show completed tasks

	let comp = document.querySelector('#show-completed');
	comp.addEventListener('click', function(){

		if(list.classList.contains('todo-done') == true){		
			list.style.display='block';		
			
		}else{
			list.style.display='none';	
		}
	});

	//clear all completed tasks
	let clearAll = document.querySelector('#clear');

	clearAll.addEventListener('click', function(){
		
			if(list.classList.contains('todo-done')){
				list.style.display='none';
				list.remove();
			}
	});

	// count how many items left

	let itemsLeft = document.querySelector('#item-left');

	itemsLeft.addEventListener('click', function(){
		let count = document.getElementsByClassName('new-item');
		let totalitems = count.length;

		let completed = document.getElementsByClassName('checked');
		let com = completed.length
		totalitems -= com
		itemsLeft.textContent= totalitems + " items left";
	});


	// cross/delete button
	let cross = document.createElement('button');
	cross.classList.add('cross');
	if(document.getElementById('main').classList.contains('dark-theme')){
		cross.style.backgroundColor = 'hsl(214, 22%, 23%)'
	}
	if(document.getElementById('main').classList.contains('light-theme')){
		cross.style.backgroundColor = 'white'
	}
 	list.appendChild(cross);

	cross.addEventListener('click', function(){
		list.style.display='none';
		list.remove();
 
	});

});

// change Theme
let  m = document.getElementById('main')
let icon = document.getElementById('icon')
let forTextColor = document.getElementById('light-text')
let att = document.getElementById('text')
let atag = document.getElementById('a-text-1')
let atag2 = document.getElementById('a-text-2')
let inputField = document.getElementById('inputText')
let btnColor = document.getElementById('btn-color')
let liTag = document.getElementsByTagName('li')
let roundBtn = document.getElementsByClassName('new-item')
let delBtn = document.getElementsByClassName('cross')
let menu = document.getElementById('bottom')
let b1 = document.getElementById('show-all')
let b2 = document.getElementById('show-active')
let b3 = document.getElementById('show-completed')
let b4 = document.getElementById('clear')
let b5 = document.getElementById('item-left')

function switchTheme(){
	if(m.classList.contains('light-theme')){
		m.classList.remove("light-theme");
		m.classList.add("dark-theme");	
		icon.classList.remove('changeTheme-light');	
		icon.classList.add("changeTheme-dark");	
		input.style.color = 'white'
		document.body.style.backgroundColor = 'hsl(216, 16%, 12%)';
		forTextColor.style.color = 'white';
		att.style.color = 'white';
		atag.style.color = 'white';
		atag2.style.color = 'white';
		inputField.style.backgroundColor = 'hsl(214, 22%, 23%)';
		btnColor.style.backgroundColor = 'hsl(214, 22%, 23%)';
		btnColor.style.border = '1px solid rgb(114, 112, 112)';
		menu.style.backgroundColor = 'hsl(214, 22%, 23%)'
		b1.style.backgroundColor = 'hsl(214, 22%, 23%)'
		b2.style.backgroundColor = 'hsl(214, 22%, 23%)'
		b3.style.backgroundColor = 'hsl(214, 22%, 23%)'
		b4.style.backgroundColor = 'hsl(214, 22%, 23%)'
		b5.style.backgroundColor = 'hsl(214, 22%, 23%)'
		b1.style.color = 'white'
		b2.style.color = 'white'
		b3.style.color = 'white'
		b4.style.color = 'white'
		b5.style.color = 'white'

		for (let i = 0; i<liTag.length; i++) {
			liTag[i].classList.remove('li-color-light');
			liTag[i].classList.add('li-color-dark');
			delBtn[i].style.backgroundColor = 'hsl(214, 22%, 23%)' 
			roundBtn[i].style.backgroundColor = 'hsl(214, 22%, 23%)'
			roundBtn[i].style.border = '1px solid rgb(114, 112, 112)'
		}
		 

	}else{
		m.classList.remove("dark-theme");
		m.classList.add("light-theme");
		icon.classList.remove('changeTheme-dark');	
		icon.classList.add("changeTheme-light");
		input.style.color = 'hsl(214, 22%, 23%)'
		document.body.style.backgroundColor = 'hsl(225, 100%, 94%)';
		forTextColor.style.color = 'black';
		att.style.color = 'black'
		atag.style.color = 'black'
		atag2.style.color = 'black'
		inputField.style.backgroundColor = 'white'
		btnColor.style.backgroundColor = 'white'
		btnColor.style.border = '1px solid #ddd'
		menu.style.backgroundColor = 'white'
		menu.style.color = 'hsl(214, 22%, 23%)'
		b1.style.backgroundColor = 'white'
		b2.style.backgroundColor = 'white'
		b3.style.backgroundColor = 'white'
		b4.style.backgroundColor = 'white'
		b5.style.backgroundColor = 'white'
		b1.style.color = 'rgb(114, 112, 112)'
		b2.style.color = 'rgb(114, 112, 112)'
		b3.style.color = 'rgb(114, 112, 112)'
		b4.style.color = 'rgb(114, 112, 112)'
		b5.style.color = 'rgb(114, 112, 112)'

		for (let i = 0; i<liTag.length; i++) {
			liTag[i].classList.remove('li-color-dark');
			liTag[i].classList.add('li-color-light');
			delBtn[i].style.backgroundColor = 'white'
			roundBtn[i].style.backgroundColor = 'white'
			roundBtn[i].style.border = '1px solid #ddd'
		}

	}
}