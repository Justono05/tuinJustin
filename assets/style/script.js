function openDialog() {
  const deDialog = document.querySelector("dialog");

  if (deDialog.open) {
    deDialog.close();
  } else {
    deDialog.show();
  }
}
