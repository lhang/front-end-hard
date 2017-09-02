const names = ["hello", "bob"]

document.innerHTML = <html>
{names.map(name => (
  <div>{name}</div>
))}
</html>