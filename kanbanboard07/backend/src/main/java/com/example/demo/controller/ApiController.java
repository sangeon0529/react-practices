package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.JsonResult;
import com.example.demo.repository.KanbanboardRepository;
import com.example.demo.vo.TaskVo;



@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private KanbanboardRepository kanbanboardRepository;

	@GetMapping("/card")
	public ResponseEntity<JsonResult> read() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(kanbanboardRepository.findAll()));
	}
	
	@GetMapping("/task/{no}")
	public ResponseEntity<JsonResult> readTask(@PathVariable("no") Long no) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(kanbanboardRepository.findTask(no)));
	}
	
	@PostMapping("/task/add/{no}")
	public ResponseEntity<JsonResult> addTask(@PathVariable("no") Long no, @RequestBody TaskVo vo) {
		kanbanboardRepository.addTask(vo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}
	
	@PostMapping("/task/update")
	public ResponseEntity<JsonResult> updateTask( @RequestBody TaskVo vo) {
		kanbanboardRepository.updateTask(vo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(kanbanboardRepository.findAll()));
	}
	
	@GetMapping("/delete/{no}")
	public ResponseEntity<JsonResult> delete (@PathVariable("no") Long no) {
		kanbanboardRepository.deleteTask(no);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(no));
	}
}
