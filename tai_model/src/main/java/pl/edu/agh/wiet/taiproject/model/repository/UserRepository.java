package pl.edu.agh.wiet.taiproject.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pl.edu.agh.wiet.taiproject.model.data.User;

import java.util.stream.Stream;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT user FROM User user")
    Stream<User> userStream();
}
