import '../styles/AboutMeComponent.scss'
import { updatePageHistory } from '../js/historyFunction';

export default {
    name: 'AboutComponent',

    mounted() {
        updatePageHistory();
    },
};