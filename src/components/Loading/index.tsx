import { ContainerLoading } from "./style";

export function Loading() {
    return (
        <ContainerLoading>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </ContainerLoading>
    )
}