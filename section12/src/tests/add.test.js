const add = (a, b) => a + b;

const generateGreeting = (name = 'Anon') => `Hello ${name}!`;


test('sould add two numbers', () => {
	const result = add(3, 4);

	expect(result).toBe(7);
});

test('Should generate greeting from name', () => {
	const result = generateGreeting('Kato');

	expect(result).toBe('Hello Kato!');
});

test('Should generate greeting', () => {
	const result = generateGreeting();

	expect(result).toBe('Hello Anon!');
});
