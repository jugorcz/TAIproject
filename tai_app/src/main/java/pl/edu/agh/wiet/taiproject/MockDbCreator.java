package pl.edu.agh.wiet.taiproject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;
import pl.edu.agh.wiet.taiproject.model.data.User;
import pl.edu.agh.wiet.taiproject.model.repository.UserRepository;

import javax.transaction.Transactional;

/**
 * Temporary class for filling db with mockup data
 */
@Component
@Transactional
public class MockDbCreator implements ApplicationListener<ContextRefreshedEvent> {

    private static Logger logger = LoggerFactory.getLogger(MockDbCreator.class);
    private final UserRepository userRepository;

    @Autowired
    public MockDbCreator(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        logger.info("Creating mock db");
        User user = new User("user");
        userRepository.save(user);
    }
}
