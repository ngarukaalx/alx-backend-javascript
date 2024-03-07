// Returns an array of 3ClassRoom objects with the size 19,20,34
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const obj = [];
  const size = [19, 20, 34];
  for (const x of size) {
    const room = new ClassRoom(x);
    obj.push(room);
  }
  return obj;
}
