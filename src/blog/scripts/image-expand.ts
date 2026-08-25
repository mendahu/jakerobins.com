const TRIGGER = ".image-expand__trigger";
const DIALOG = "dialog.image-expand__dialog";

/** Window scroll when the lightbox first opened; kept while switching images. */
let scrollLockPosition = 0;

function anyImageDialogOpen(): boolean {
  return document.querySelector(`${DIALOG}[open]`) !== null;
}

function setScrollLock(lock: boolean) {
  const html = document.documentElement;
  if (lock) {
    if (!html.classList.contains("image-expand-is-open")) {
      scrollLockPosition = window.scrollY;
      html.style.setProperty(
        "--image-expand-saved-scroll",
        `${scrollLockPosition}px`,
      );
    }
    html.classList.add("image-expand-is-open");
  } else {
    html.classList.remove("image-expand-is-open");
    html.style.removeProperty("--image-expand-saved-scroll");
    window.scrollTo({ top: scrollLockPosition, left: 0, behavior: "auto" });
  }
}

function closeOtherImageDialogs(dialog: HTMLDialogElement) {
  document.querySelectorAll<HTMLDialogElement>(`${DIALOG}[open]`).forEach(
    (openDialog) => {
      if (openDialog !== dialog) openDialog.close();
    },
  );
}

function initImageExpand() {
  if (typeof document === "undefined") return;
  if (document.documentElement.dataset.imageExpandInit === "true") return;
  document.documentElement.dataset.imageExpandInit = "true";

  document.addEventListener("click", (e) => {
    const trigger = (e.target as Element | null)?.closest<HTMLButtonElement>(
      TRIGGER,
    );
    if (!trigger) return;
    const id = trigger.getAttribute("data-dialog-target");
    if (!id) return;
    const dialog = document.getElementById(id);
    if (!(dialog instanceof HTMLDialogElement)) return;
    e.preventDefault();
    closeOtherImageDialogs(dialog);
    setScrollLock(true);
    dialog.showModal();
    /* Focus dialog, not the first tabbable — avoids Safari’s focus ring on open. */
    queueMicrotask(() => {
      dialog.focus({ preventScroll: true });
    });
  });

  document.addEventListener("click", (e) => {
    const closer = (e.target as Element | null)?.closest<HTMLElement>(
      "[data-image-expand-close]",
    );
    if (!closer) return;
    const dialog = closer.closest("dialog");
    if (dialog instanceof HTMLDialogElement) dialog.close();
  });

  document.querySelectorAll<HTMLDialogElement>(DIALOG).forEach((dialog) => {
    dialog.addEventListener("close", () => {
      queueMicrotask(() => {
        if (!anyImageDialogOpen()) setScrollLock(false);
      });
    });
  });
}

initImageExpand();
