export type Empty = { kind: "empty" };
export type Full<T> = { kind: "node"; value: T; next: List<T> }
export const empty : Empty = { kind: "empty" }
export const node = <T>(value: T) =>(next: List<T>) : Full<T> => ({ kind: "node", value, next })
 
export type List<T> = 
  | Full<T>
  | Empty

export const filterList = <T>(arr: T[]) => (predicate: (value: T) => boolean) : List<T> => {
    const walk = (i: number) : List<T> => {
        if(i > arr.length){
            return {kind: "empty"}
        }
        return predicate(arr[i]) ? {kind: "node", value: arr[i], next: walk(i + 1)} : walk(i + 1)
    }
    return walk(0)
}