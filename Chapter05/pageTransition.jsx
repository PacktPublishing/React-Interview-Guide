function navigate(url) {
  startTransition(() => {
    setPage(url);
  });
}
