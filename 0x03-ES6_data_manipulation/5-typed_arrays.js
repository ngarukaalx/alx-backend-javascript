// returns a new ArrayBuffer with an Int8 value at a specific position.
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8 = new Int8Array(buffer);
  if (position >= 0 && position < length) {
    int8[position] = value;
  } else {
    throw new Error('Position outside range');
  }
  return int8;
}
