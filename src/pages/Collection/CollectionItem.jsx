import {formatPrice} from "../../utils/priceUtils.js";
import '../../styles/pages/Collection/CollectionItem.scss';
import {Link} from "react-router-dom";
function CollectionItem({item}) {
    const chance = (
        parseInt(item['collection_item_range_to'])
        -parseInt(item['collection_item_range_from']))/1000;

    return (
        <Link to={`/skinbase/skin/${item['skin_url']}`} className="skin">
            <div className={`cover rarity-border-top-10 ${item['rarity_code']}`}></div>
            <div className="skin-data">
                <div className={`skin-rarity rarity-background ${item['rarity_code']}`}></div>
                <div className="skin-weapon">{item['weapon_name']}</div>
                <div className="skin-name">{item['skin_name']}</div>
                <div className="skin-collections">{chance}%</div>
                <div className="skin-image">
                    <img src={item['skin_img']}/>
                </div>
                <div className="skin-price">{formatPrice(item['skin_price_min'])} - {formatPrice(item['skin_price_max'])}</div>
            </div>
            <div className="wear-details">
                <table className={'wears-table'}>
                    <tbody>
                        <tr>
                            <th>
                                Wear
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Chance
                            </th>
                        </tr>
                        <tr>
                            <td>
                                FN
                            </td>
                            <td>
                                v$1234.31
                            </td>
                            <td>
                                0.00004%
                            </td>
                        </tr>
                        <tr>
                            <td>
                                MW
                            </td>
                            <td>
                                v$1102.12
                            </td>
                            <td>
                                0.00018%
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Link>
    );
}

export default CollectionItem;