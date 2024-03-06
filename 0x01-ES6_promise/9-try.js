//Return an array named queue
export default function guardrail(Function) {
    const message = 'Guardrail was processed';
    const queue = [];
	try {
		const result = Function();
		queue.push(result);
	} catch (error) {
		queue.push(error);
	}
	queue.push(message);
	return queue;
}
