import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Pagination from '@material-ui/lab/Pagination';

// 컴포넌트
// 타이틀
import Title from "../component/Title";
// 모델
import MainListModel from "../model/MainListModel";

// 타이틀 세팅
const useTitle = Title();

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  mediaLeft: {
    float: 'left',
    paddingRight: '20px',
    paddingBottom: '20px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width: '55px',
  },
}));

const Home = () => {
  // 타이틀 변경
  useTitle("Playneko - 아키하바라와 개발정보를 공유하는 블로그 입니다.");

  // 스타일 정보
  const classes = useStyles();
  // 메인 리스트 취득
  const listData = MainListModel();

  return (
    <>
      <div className="mainStyle-content">
      {
        listData.list.map(list => (
          <div className={classes.mediaLeft}>
            <Card className={classes.root}>
            <CardHeader
                avatar={
                  <Avatar aria-label="recipe">
                    <img
                      alt="Avatar"
                      src='https://playneko.com/wp-content/uploads/2020/04/cropped-avatarimg_user1.png'
                      className={classes.avatar}
                    />
                  </Avatar>
                }
                title={list.board_title}
                subheader={list.board_date}
            />
            <NavLink to={"/detail/" + list.no}>
                <CardMedia
                  className={classes.media}
                  image={list.board_thumnail}
                  title={list.board_title}
                />
            </NavLink>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {list.board_comment}
                </Typography>
            </CardContent>
            </Card>
          </div>
        ))
      }
      </div>
      <div className={classes.root + " mainStyle-pagination"}>
        <Pagination count={listData.paging.total} shape="rounded" />
      </div>
    </>
  );
};

export default Home;
