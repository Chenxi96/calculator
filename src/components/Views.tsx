import './view.css';

export default function Views(props: any) {
    const {view} = props

    return (
        <>
            <div id="display">
                {view}
            </div>
        </>
    )
};
