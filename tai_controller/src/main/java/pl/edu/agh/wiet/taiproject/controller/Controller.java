package pl.edu.agh.wiet.taiproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import pl.edu.agh.wiet.taiproject.model.data.Task;
import pl.edu.agh.wiet.taiproject.model.repository.TaskRepository;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@Transactional
@CrossOrigin
@RequestMapping("/api")
public class Controller {

    @Autowired
    TaskRepository taskRepository;

    @GetMapping("/user")
    public ResponseEntity<?> getUser(Principal principal) {
        if(principal != null)
            return ResponseEntity.ok(principal);
        else{
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();

        }
    }

    @GetMapping("/task")
    public List<Task> getTaskList(Principal principal) {
        Stream<Task> taskStream = taskRepository.taskStream();
        try {
            if (principal != null) {
                taskStream = taskStream.filter(task -> task.getUserId().equals(principal.getName()));
                return taskStream.collect(Collectors.toList());
            } else
                return new ArrayList<>();
        } catch (Exception e) {
            return new ArrayList<>();
        }
    }

    @GetMapping("/task/{id}")
    public ResponseEntity<?> getTask(Principal principal, @PathVariable Long id) {
        Optional<Task> taskOptional;
        try {
            taskOptional = taskRepository.findById(id);
            if(taskOptional != null && taskOptional.isPresent() && taskOptional.get().getUserId().equals(principal.getName()))
                return ResponseEntity.ok().body(taskOptional.get());
            else
                return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/task")
    public ResponseEntity<?> putTask(Principal principal, @RequestBody Task task){
        Task newTask = new Task(task);
        newTask.setUserId(principal.getName());
        try {
            taskRepository.save(newTask);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e);
        }
        return ResponseEntity.ok().body(newTask);
    }

    @PostMapping("/task")
    public ResponseEntity<?> updateTask(Principal principal, @RequestBody Task task) {
        try {
            if(getTaskList(principal).contains(task)){
                taskRepository.save(task);
                return ResponseEntity.ok().body(task);
           }
            else
                return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e);
        }
    }

    @DeleteMapping("/task/{id}")
    public ResponseEntity<?> deleteTask(Principal principal, @PathVariable Long id)
    {
        Optional<Task> taskOptional;
        try {
            taskOptional = taskRepository.findById(id);
            if(taskOptional.isPresent()) {
                Task task =  taskOptional.get();
                if(task.getUserId().equals(principal.getName())){
                    taskRepository.delete(task);
                    return ResponseEntity.ok().body("");
                }
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e);
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("");
    }
}