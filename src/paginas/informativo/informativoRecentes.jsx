import React from 'react'
import moment from 'moment'

export default props => {
    const renderLi = () => {
        const list = props.list || [];
        return list.map(info => (
            <li key={info.id}>
                <a className="widget-post-media">
                    <img src={info.img_thumb_path} alt=""/>
                </a>
                <div className="widget-post-info">
                    <h6>
                        <a onClick={() => props.changeInfo(info)}>{info.titulo}</a>
                    </h6>
                    <div className="post-meta">
                        {moment(info.created_at).format('L')}
                    </div>
                </div>
            </li>
        ))
    };

    return (
        <div className="col-sm-4 mt-sm-60">
            <div className="sidebar-widget">
                <h5>Posts Recentes</h5>
                <hr />
                <ul className="widget-post pt-15">
                    { renderLi() }
                </ul>
            </div>
        </div>
    )
}