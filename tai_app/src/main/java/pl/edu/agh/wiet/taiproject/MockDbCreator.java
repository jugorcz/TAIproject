package pl.edu.agh.wiet.taiproject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import pl.edu.agh.wiet.taiproject.model.data.Task;
import pl.edu.agh.wiet.taiproject.model.data.TaskStatus;
import pl.edu.agh.wiet.taiproject.model.repository.TaskRepository;

import java.sql.Date;

/**
 * Temporary class for filling db with mockup data
 */
@Component
@Transactional
public class MockDbCreator implements ApplicationListener<ContextRefreshedEvent> {

    private static Logger logger = LoggerFactory.getLogger(MockDbCreator.class);

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        logger.info("Creating mock db");
        Task task = new Task("Sample", TaskStatus.UNCHECKED, Date.valueOf("2018-07-07"), "example", "example category");
        Task task2 = new Task("Sample2", TaskStatus.UNCHECKED, Date.valueOf("2018-07-07"), "cuQPNjvUyts2E4fCLyiy", "example category");
        taskRepository.save(task);
        taskRepository.save(task2);
    }
}
