type InputText = {
    label: string,
    type: string,
    min?:number
}

type inputProp = 
  | {type: "text"; id:string; name: string; placeholder:string}
  | {type: "number"; id:string; min?:number; max?:number}
  | {type: "checkbox"; id:string; checked:boolean; value:string; onChange?: (atrr:string) => void}

export const InputText = (props:inputProp) => {
    if (props.type === "text") return <input {...props} /> 
    if (props.type === "checkbox") return <input type={props.type} id={props.id} checked={props.checked} onChange={() => props.onChange?.(props.value)} />
    if (props.type == "number") return <input {...props} />
}
