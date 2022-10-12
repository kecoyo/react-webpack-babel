const router = {
  go(...args) {
    this.navigate(...args);
  },
  goBack(n = -1) {
    this.navigate(n);
  },
};
window.router = router;
export default router;
