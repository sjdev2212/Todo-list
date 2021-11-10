import addTask from "./text-1";

test('Add one new item to the list', () => {
  
    expect(addTask('algo')).toBe(undefined);
});
