// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

class SmallestIntegerFinder {
  findSmallestInt(args) {
    // const firstOption = () => {
    //   return Math.min(...args);
    // };

    const secondOption = () => {
      let smallest = args[0];

      args.forEach((num) => {
        if (smallest > num) {
          smallest = num;
        }
      });
      return smallest;
    };
    return secondOption();
  }
}

const sif = new SmallestIntegerFinder();

sif.findSmallestInt([78, 56, 232, 12, 8]);
sif.findSmallestInt([78, 56, 232, 12, 18]);
sif.findSmallestInt([78, 56, 232, 412, 228]);
sif.findSmallestInt([78, 56, 232, 12, 0]);
sif.findSmallestInt([1, 56, 232, 12, 8]);
