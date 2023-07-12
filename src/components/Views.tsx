

export default function Views(props: any) {
    const {view} = props

    return (
        <>
        {console.log(view)}
            <div id="display">
                {view}
            </div>
        </>
    )
};
