console.log("skrypty załadowane!")

const owce = [
	{
		name: "Martin",
		color: "white",
		age: 7,
	},
	{
		name: "Somebody",
		color: "white",
		age: 1,
	},
	{
		name: "Krzesło",
		color: "white",
		age: 3,
	},
	{
		name: "Taboret",
		color: "white",
		age: 12,
	},
	{
		name: "Foo",
		color: "blue",
		age: 4,
	},
	{
		name: "Bar",
		color: "black",
		age: 2,
	},
	{
		name: "Janusz",
		color: "orange",
		age: 10,
	},
	{
		name: "Ojeny",
		color: "green",
		age: 17,
	},
	{
		name: "Ojej",
		color: "green",
		age: 17,
	},
]


const reprezentacjaOwiec = owce.map( owca => `
	<div class="owca">
		<h3>${owca.name}</h3>
		<h3>${owca.color}</h3>
		<h3>${owca.age}</h3>
	</div>	

` )

// Łączymy tablicę w wielki ciąg znaków
const tekstDoWstawienia = reprezentacjaOwiec.join("");

// Znajdujemy miejsce w HTML na owce
const miejsceNaTekst = document.querySelector("#miejsceNaOwce")

// Wstawiamy owce
miejsceNaTekst.innerHTML = tekstDoWstawienia;
