var names = ["hello", "bob"];
document.innerHTML = <html>
{names.map(function (name) { return (<div>{name}</div>); })}
</html>;
