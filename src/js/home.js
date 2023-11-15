import '../styles/HomeComponent.scss'
import { updatePageHistory } from '../js/historyFunction';

export default {
    name: 'HomeComponent',

    mounted() {
        updatePageHistory();
    },
};