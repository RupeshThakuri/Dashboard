import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export const cardsData = [
    {
        title: 'Vacancies',
        color: {
            backGround: "linear-gradient(180deg,#bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue:70,
        value: "77",
        png: FindInPageIcon,
    },
    {
        title: 'Members',
        color: {
            backGround: "linear-gradient(180deg,#ff919d 0%, #fc929d 100%)",
            boxShadow: "0px 10px 20px 0px #fdc0c7",
        },
        barValue:80,
        value: "38",
        png: PeopleAltIcon,
    },
    {
        title: 'Projects',
        color: {
            backGround: "linear-gradient(rgb(248,212,154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #f9d59b",
        },
        barValue:77,
        value: "308",
        png: BusinessCenterIcon,
    }
]