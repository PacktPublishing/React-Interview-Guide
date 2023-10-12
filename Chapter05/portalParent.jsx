function ParentComponent() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        message="This is a portal modal!"
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
