function factorialize(num) {
   if (num === 0 || num == 1) { return 1; }
  return num * factorialize(num-1);
}


factorialize(5);
factorialize(10);
factorialize(20);
factorialize(0);
