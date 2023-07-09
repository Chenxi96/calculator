

export default function Views(props: any) {
    const {view, setView, totalView, setTotalView} = props

    return (
        <>
        {console.log(view)}
            <div id="totalview">
                {totalView}
            </div>
            <div id="view">
                {view}
            </div>
        </>
    )
};
