package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.CardVo;
import com.example.demo.vo.TaskVo;

@Repository
public class KanbanboardRepository {

	@Autowired
	private SqlSession sqlSession;
	
	public List<CardVo> findAll() {
		return sqlSession.selectList("card.findAll");
	}

	public List<TaskVo> findTask(Long no) {
		return sqlSession.selectList("card.findTask",no);
	}

	public int addTask(TaskVo vo) {
		// TODO Auto-generated method stub
		return sqlSession.insert("card.addTask",vo);
	}

	public int deleteTask(Long no) {
		// TODO Auto-generated method stub
		return sqlSession.delete("card.deleteTask",no);
		
	}

	public int updateTask(TaskVo vo) {
		// TODO Auto-generated method stub
		return sqlSession.update("card.updateTask",vo);
	}

}
