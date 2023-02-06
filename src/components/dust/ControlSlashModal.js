export default function ControlSlashModal() {
    const hotkeys = [
      {
        name: "This menu",
        kbd: ["ctrl", "/"],
      },
      {
        name: "Toggle theme",
        kbd: ["ctrl", "m"],
      },
      {
        name: "Random projects",
        kbd: ["."]
      }
    ];
    return (
      <>
        <input
          type="checkbox"
          id="controlslashmodal"
          className="modal-toggle"
        />
        <label htmlFor="controlslashmodal" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg font-bold">Hello World!</h3>
            <div className="grid grid-cols-3 text-xs py-4">
              {hotkeys.map((x, idx) => {
                return (
                  <div key={idx} className="p-2">
                    <h4 className="text-base">{x.name}</h4>
                    {x.kbd.map((xx, idxx, row) => {
                     return (
                       <span key={idxx}>
                         <kbd className={"kbd" + (idxx + 1 === row.length? "" : " mr-1")}>{xx}</kbd>
                       </span>
                     );
                    })}
                  </div>
                );
              })}
            </div>
          </label>
        </label>
      </>
    );
}