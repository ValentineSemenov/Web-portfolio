import { updatePageHistory } from './historyFunction';
import '../styles/EducationComponent.scss'

export default {
    name: 'EducationComponent',

    mounted() {
        updatePageHistory();
    },
};